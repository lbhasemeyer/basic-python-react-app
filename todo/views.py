import os
import io
import json

from todo import app
from flask import render_template, jsonify, request


SITE_ROOT = os.path.realpath(os.path.dirname(__file__))
JSON_URL = os.path.join(SITE_ROOT, 'static', 'todos.json')


@app.route('/')
def index():
    return render_template('index.html')


@app.route('/api/todos/', methods=['GET'])
def todos_list():
    print('python GET in views.py')
    with open(JSON_URL) as data_file:
        json_data = json.load(data_file)

    return jsonify(result='ok', data=json_data['todos'])

@app.route('/api/todos/', methods=['PUT'])
def todos_update():
    print('python PUT in views.py')
    data_dict = json.loads(request.data)
    id = data_dict['id']
    title = data_dict['title']

    with open(JSON_URL) as data_file:
        json_data = json.load(data_file)

    json_data['todos'].append({'id': id, 'title': title})

    with io.open(JSON_URL, 'w', encoding='utf-8') as f:
        f.write(unicode(json.dumps(json_data, ensure_ascii=False)))

    return jsonify(result='ok', data=json_data)


@app.route('/api/todos/', methods=['DELETE'])
def todos_remove():
    print('python DELETE in views.py')
    data_dict = json.loads(request.data)
    id = data_dict['id']

    with open(JSON_URL) as data_file:
        json_data = json.load(data_file)

    json_data['todos'] = \
        [x for x in json_data['todos'] if not (id == x.get('id'))]

    with io.open(JSON_URL, 'w', encoding='utf-8') as f:
        f.write(unicode(json.dumps(json_data, ensure_ascii=False)))

    return jsonify(result='ok', data=json_data)
