import json

matches = []

compLevel = input('Comp level: ')
event_key = input('Event key: ')

while True:
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

    print(alliances)
