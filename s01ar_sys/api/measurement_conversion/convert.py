import json
from pathlib import Path


def convert(from_unit, to_unit, amount):
    script_location = Path(__file__).absolute().parent

    with open(f'{script_location}/units.json', 'r') as f:
        units = json.load(f)

        try:
            unit = f"{from_unit}-{to_unit}"
            rate = units[unit]

            converted = int(amount) * float(rate)

            return {
                "amount": converted
            }
        except KeyError:
            return {
                "Not Found": f"{from_unit}-{to_unit}"
            }
