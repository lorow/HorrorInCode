#middleware for Article app

def get_article_id(request_dict):
    if 'id' in request_dict and request_dict['id'].isdigit():
        return int(request_dict['id'])

    return -1


def get_article(Article ,id):
    return Article.objects.get(article_id=id) if id > 0 else None

def get_user(UserProfile, id):
    return  UserProfile.objects.get(id=id) if id > 0 else None

def get_comments(Comment, article_id):
    return Comment.objects.filter(article_id=article_id) if article_id > 0 else None

