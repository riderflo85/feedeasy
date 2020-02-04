from .default import *
import os


SECRET_KEY = os.environ.get('SECRET_KEY')

DEBUG = True

ALLOWED_HOSTS = ['127.0.0.1', '192.168.1.12']