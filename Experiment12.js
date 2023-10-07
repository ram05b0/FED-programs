import React,{useContext} from "react";
import {BlogContext} from './App';

function Experiment12 () {
const binfo = useContext(BlogContext);
return (
<div>
<p><h2>Topic : {binfo.React.post}</h2></p>
<p><h2>Author : {binfo.React.author}</h2></p>
</div>

);
}

export default Experiment12;


