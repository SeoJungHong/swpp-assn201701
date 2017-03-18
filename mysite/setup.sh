#!/bin/bash
set -e -x

git pull
pip install -r requirements.txt
python manage.py migrate
