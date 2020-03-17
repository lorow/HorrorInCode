from graphene_django.forms.mutation import DjangoFormMutation
from django import forms


class EmailForm(forms.Form):
    subject = forms.CharField()
    email = forms.EmailField()
    text = forms.CharField()

    def save(self, *args, **kwargs):
        print(self.cleaned_data)


class EmailMutation(DjangoFormMutation):
  """ A mutation that takes form data and sends an email """
  class Meta:
    form_class = EmailForm