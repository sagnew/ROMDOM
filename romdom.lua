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

function handle_input ()
    local address = tonumber(read_file("address.txt"), 16);
    local value = tonumber(read_file("value.txt"), 16);
    local speed = read_file("speed.txt");

    if(address ~= "null" and address ~= nil and value ~= nil) then
        memory.writebyte(address, value);
    end;

    if(speed ~= "null") then
    	emu.speedmode(speed);
    end;
end;

while (true) do
    handle_input()
    emu.frameadvance();
end;
