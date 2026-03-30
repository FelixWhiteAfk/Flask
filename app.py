from flask import Flask, render_template, request, redirect, url_for, flash, session
import pyodbc
from flask_wtf import FlaskForm
from wtforms import StringField, PasswordField, SubmitField
from wtforms.validators import DataRequired, EqualTo, Length
from werkzeug.security import generate_password_hash, check_password_hash

app = Flask(__name__)
app.secret_key = 'your_secret_key'


@app.route('/')
def index():
    return render_template('index.html')


@app.route('/callback', methods=['POST'])
def callback():
    name = request.form.get('name')
    phone = request.form.get('phone')
    email = request.form.get('email')
    question = request.form.get('question')

    # Здесь можно добавить отправку на email
    print(f"Заявка: {name}, {phone}, {email}, {question}")

    flash('Заявка отправлена! Мы свяжемся с вами.', 'success')
    return redirect(url_for('index') + '#contacts')


if __name__ == '__main__':
    app.run(host:'0.0.0.0',debug=True)
