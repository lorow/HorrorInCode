from django import forms


class CommentForm(forms.Form):
    comment = forms.CharField(widget=forms.Textarea(
        attrs={'class': 'uk-textarea uk-width-4-5', 'placeholder': 'Write you response to this nonsense', 'rows': 5}
    ))
