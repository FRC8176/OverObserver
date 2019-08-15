import json
import time


def encode_matches_data(comp_level, event_key, match_datas):
    matches = {}

    for match_data in match_datas:
        match_number = match_data[0]
        key = '{}_{}{}'.format(event_key, comp_level, match_number)

        alliances = {
            'red': {
                'team_keys': []
            },
            'blue': {
                'team_keys': []
            }
        }

        for team in match_data[-6:-3]:
            alliances['red']['team_keys'].append('frc{}'.format(team))
        for team in match_data[-3:]:
            alliances['blue']['team_keys'].append('frc{}'.format(team))

        match = {
            'time': int(time.time()),
            'comp_level': comp_level,
            'event_key': event_key,
            'key': key,
            'match_number': match_number,
            'alliances': alliances
        }

        matches[key] = match

    return matches


if __name__ == '__main__':
    compLevel = input('Comp level: ')
    event_key = input('Event key: ')
    startFrom = int(input('Match start from: '))
    matchCount = int(input('Total match count: '))

    datas = []

    for num in range(matchCount):
        data = [num+startFrom]

        for i in range(3):
            team = input('Red {}: '.format(i+1))
            data.append(team)

        for i in range(3):
            team = input('Blue {}: '.format(i+1))
            data.append(team)

        datas.append(data)

    result = encode_matches_data(compLevel, event_key, datas)

    print(result)

    saveToFile = input('Save to File? [N/y]: ')

    if saveToFile == 'y' or saveToFile == 'Y':
        file_name = input('File name: ')
        with open(file_name, 'w+') as FILE:
            json.dump(result, FILE)
