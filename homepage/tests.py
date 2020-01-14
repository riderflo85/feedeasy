from django.test import TestCase, Client
from .views import home


class UrlsTestCase(TestCase):
    def setUp(self):
        self.cli = Client()

    def test_homepage_status(self):
        rep = self.cli.get('/')
        self.assertEqual(rep.status_code, 200)
        self.assertEqual(rep.resolver_match.func, home)
        self.assertTemplateUsed(rep, 'homepage/index.html')