import { call, put, takeEvery } from 'redux-saga/effects';
import { setBlogPosts, setSingleBlogPost } from '../actions/blogActions';
import { setAllProjects, setSingleProject } from '../actions/projectActions';

function* fetchFeaturedProjects(action) {
  const query = `query
  {
    projects{ 
      id,
      name,
      cover,
    }
  }`;

  const response = yield call(fetch, `/graph/?query=${query}`.replace(/\s+/g, ''))
  if (response.ok) {
    const json = yield call([response, 'json'])
    yield put(setAllProjects({ data: json.data.projects }))
  }
}

function* fetchBlogPosts(action) {
  const query = `query
  {
    articles( first: 3, after:${action.payload ? action.payload : '""'} ){ 
      pageInfo{ 
        hasNextPage,
        hasPreviousPage,
        endCursor,
      }, 
      edges{ 
        node{ 
          publishedDate,
          id,
          title,
          description,
          tags { 
            id,
            name
          }
        },
        cursor
      }
    },
  }`

  const response = yield call(fetch, `/graph/?query=${query}`.replace(/\s+/g, ''))

  if (response.ok) {
    const json = yield call([response, "json"])
    yield put(setBlogPosts({ data: json.data.articles.edges, pageInfo: json.data.articles.pageInfo }))
  }
}

function* fetchSingleBlogPost(action) {

  const query = `query{
    article(id:${action.payload}){
      title,
      description,
      publishedDate,
      tags {
        id,
        name
      },
      id
    }
  }
  `;

  const response = yield call(fetch, `/graph/?query=${query}`.replace(/\s+/g, ''));
  if (response.ok) {
    const json = yield call([response, "json"]);
    yield put(setSingleBlogPost({ data: json.data.article }))
  }
}

function* fetchSingleProject(action) {
  const query = `query{
    project(id:${action.payload}){
      id,
      name,
      cover,
      techStack {
        id,
        name
      },
      description
    }
  }`

  const response = yield call(fetch, `/graph/?query=${query}`.replace(/\s+/g, ''))
  if (response.ok) {
    const json = yield call([response, "json"])
    yield put(setSingleProject(json.data.project))
  }
}

export default function* rootSaga() {
  yield takeEvery("FETCH_BLOG_POSTS", fetchBlogPosts);
  yield takeEvery("FETCH_PROJECTS", fetchFeaturedProjects);

  yield takeEvery("FETCH_COMPLETE_POST", fetchSingleBlogPost);
  yield takeEvery("FETCH_PROJECT", fetchSingleProject);
}