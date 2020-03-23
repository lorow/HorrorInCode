import { call, put, takeEvery } from 'redux-saga/effects';
import { setBlogPosts } from '../actions/blogActions';
import { setAllProjects } from '../actions/projectActions';

function* fetchFeaturedProjects(action) {
  const query = `query{projects{id, name, cover,}}`;
  const response = yield call(fetch, '/graph/?query=' + query)
  if (response.ok) {
    const json = yield call([response, 'json'])
    yield put(setAllProjects({ data: json.data.projects }))
  }
}

function* fetchBlogPosts(action) {
  const query = `query{ articles(first: 3, after:""){ pageInfo{ hasNextPage, hasPreviousPage, endCursor, }, edges{ node{ publishedDate,id, title, description, tags { id, name}},cursor}},}`
  const response = yield call(fetch, '/graph/?query=' + query)

  if (response.ok) {
    const json = yield call([response, "json"])
    yield put(setBlogPosts({ data: json.data.articles.edges, pageInfo: json.data.articles.pageInfo }))
  }
}


export default function* rootSaga() {
  yield takeEvery("FETCH_BLOG_POSTS", fetchBlogPosts);
  yield takeEvery("FETCH_PROJECTS", fetchFeaturedProjects);
}