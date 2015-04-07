function write_file (filename, text)
  output = io.open(filename, "w");
  io.output(output);
  io.write(text);
  io.close(output);
end;

function read_file (filename)
  input = io.open(filename, "r");
  io.input(input);
  input_content = io.read();
  io.close(input);

  return input_content;
end;

function write_ram_byte (address, value)
  if(address ~= nil and value ~= nil) then
    memory.writebyte(address, value);
  end;
end;

function read_ram_byte (address)
  if(address ~= nil) then
    local value = tonumber(memory.readbyte(address), 16);
    write_file("value.txt", value);
  end;
end;

function read_rom_byte (address)
  if(address ~= nil) then
    local value = tonumber(rom.readbyte(address), 16);
    write_file("value.txt", value);
  end;
end;

function handle_input ()
  local action = read_file("action.txt");
  local addr_string = read_file("address.txt");
  local value_str = read_file("value.txt");
  local print_text = read_file("print.txt");

  emu.message(print_text);

  if addr_string ~= nil then
    address = tonumber(addr_string, 16);
  end

  if addr_string ~= nil then
    value = tonumber(value_str, 16);
  end

  if action == "writeRamByte" then
    write_ram_byte(address, value);
  elseif action == "readRamByte" then
    read_ram_byte(address);
  elseif action == "readRomByte" then
    read_rom_byte(address);
  end;

  write_file("action.txt", "null");
end;

while (true) do
  handle_input()
  emu.frameadvance();
end;
