import json
from pathlib import Path


def convert(from_unit, to_unit, amount):
    script_location = Path(__file__).absolute().parent

    with open(f'{script_location}/units.json', 'r') as f:
        units = json.load(f)

        try:
            rate = units[f"{from_unit}-{to_unit}"]

            converted = int(amount) * int(rate)

            return {
                "amount": converted
            }
        except KeyError:
            return {
                "Not Found": "unit not found."
            }
