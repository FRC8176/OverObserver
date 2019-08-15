import json
import time

matches = {}

compLevel = input('Comp level: ')
event_key = input('Event key: ')
startFrom = int(input('Match start from: '))
matchCount = int(input('Total match count: '))

for num in range(matchCount):
    match_number = num+startFrom
    key = '{}_{}{}'.format(event_key, compLevel, match_number)
    match = {
        'time': int(time.time()),
        'comp_level': compLevel,
        'event_key': event_key,
        'key': key,
        'match_number': match_number
    }
    alliances = {
        'red': {
            'team_keys': []
        },
        'blue': {
            'team_keys': []
        }
    }

    for i in range(3):
        team = input('Red {}: '.format(i+1))
        alliances['red']['team_keys'].append('frc{}'.format(team))

    for i in range(3):
        team = input('Blue {}: '.format(i+1))
        alliances['blue']['team_keys'].append('frc{}'.format(team))

    match['alliances'] = alliances

    print(match)

    matches[key] = match

with open('generated_matches.json', 'w+') as FILE:
    json.dump(matches, FILE)
