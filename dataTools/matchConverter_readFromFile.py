from matchConverter import encode_matches_data as encode
import json

source_file_name = input('Source: ')

datas = []

with open(source_file_name, 'r') as FILE:
    for line in FILE.readlines():
        data = []
        for v in line.split(' '):
            data.append(int(v))
        datas.append(data)

compLevel = input('Comp level: ')
event_key = input('Event key: ')

result = encode(compLevel, event_key, datas)

print(result)

saveToFile = input('Save to File? [N/y]: ')

if saveToFile == 'y' or saveToFile == 'Y':
        file_name = input('File name: ')
        with open(file_name, 'w+') as FILE:
            json.dump(result, FILE)
