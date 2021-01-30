import json
from pathlib import Path


def get_notes():
    script_location = Path(__file__).absolute().parent

    with open(f"{script_location}/notes.json", "r") as f:
        notes = json.load(f)

        return notes
