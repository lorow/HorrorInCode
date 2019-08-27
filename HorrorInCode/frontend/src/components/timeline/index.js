import { timelines_entering } from './EnteringTimelines';
import { timelines_exiting } from './ExitingTImelines';


function striptPath(path) {
    let strippedPath = path.replace('/', '');

    if (strippedPath === '')
        strippedPath="home";

    return strippedPath
}


export const play = (path, isEntering) => {
    let animFunc = isEntering ? timelines_entering[striptPath(path)] : timelines_exiting[striptPath(path)]

    console.log(path, isEntering)

    let anim = animFunc()
    anim.play()
}