prev = "";
msg = "";

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

function read_ram_byte (address, value)
  if(address ~= nil) then
    local value = memory.readByte(address);
    write_file("value.txt", value);
  end;
end;

function handle_input ()
  local action = read_file("action.txt");
  local address = tonumber(read_file("address.txt"), 16);
  local value = tonumber(read_file("value.txt"), 16);

  if action == "writeRamByte" then
    write_ram_byte(address, value);
  elseif action == "readRamByte" then
    read_ram_byte(address);
  end;
  write_file("action.txt", "null");
end;

while (true) do
  handle_input()
  emu.frameadvance();
end;
