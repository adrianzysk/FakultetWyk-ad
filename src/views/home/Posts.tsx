import React from 'react';
import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles({
    movie: {
        width: '28%',
        minWidth: '150px',
        border: '1px solid #000',
        borderRadius: '5px',
        margin: 'auto auto 60px',
        textAlign: 'center',
        backgroundColor: '#3f51b5'
    },
    input: {
        textAlign: 'center',
    },
    in: {
        textAlign: 'center',
        margin: '20px',
    },
    background: {
        backgroundImage: 'linear-gradient(-45deg,#e6f9ff,#004e66)'
    }
});






const Posts = () => {
    const classes = useStyles();
    const [posts, setPosts] = React.useState('');

    React.useEffect(() => {
        fetch('https://jsonplaceholder.typicode.com/posts')
            .then(resp => resp.json())
            .then(json => setPosts(json));
    }, [])
    console.log(posts);

    return (
        <div className={classes.background}>
            {Object.keys(posts).map((post, index) => <div key={index} className={classes.movie}>
                <h1>{posts[post].title}</h1>
            </div>)}
        </div>
    );
};

export default Posts;
