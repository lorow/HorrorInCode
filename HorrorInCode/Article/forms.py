from django import forms

from models import Article, UserProfile


class CustomCommentForm(forms.Form):
    comment = forms.CharField(widget=forms.Textarea(
        attrs={'class': 'uk-textarea uk-width-4-5', 'placeholder': 'Write you response to this nonsense', 'rows': 5}
    ))

    article_id = forms.CharField(widget=forms.HiddenInput(
        attrs={'name': 'article_id'}
    ))


class ArticleForm(forms.ModelForm):

    title = forms.CharField(widget=forms.TextInput(
        attrs={'class': 'uk-input', 'placeholder': 'Title of the article'}
    ))

    description = forms.CharField(widget=forms.Textarea(
        attrs={'class': 'uk-textarea', 'placeholder': 'The whole article', 'rows': 20}
    ))

    tags = forms.CharField(widget=forms.TextInput(
        attrs={'class': 'uk-input uk-margin-small-top', 'placeholder': 'Tags, separate them by "," '}
    ))

    reading_time = forms.CharField(widget=forms.NumberInput(
        attrs={'class': 'uk-input', 'placeholder': 'The amount of time needed to read this'}
    ))

    image = forms.ImageField()

    author_id = forms.ModelChoiceField(queryset=UserProfile.objects.all(), empty_label="(Nothing)", widget=forms.Select(
        attrs={'class':'uk-select uk-width-1-3 uk-margin-small-right'}
    ))

    class Meta:
        model = Article
        fields = ("title", "description", "tags", "reading_time", "image", 'author_id')
