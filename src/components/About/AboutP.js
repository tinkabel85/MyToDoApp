import React, { useState, useEffect } from 'react';
import styles from './About.module.css';
import CircularProgress from '@material-ui/core/CircularProgress';
import Button from '@material-ui/core/Button';
import { Octokit } from '@octokit/rest';

const octokit = new Octokit();

const AboutP = () => {
  const [isLoading, setIsLoading] = useState(true);
  const [repoList, setRepoList] = useState([]);
  const [requestFailed, setRequestFailed] = useState(false);
  const [showAll, setShowAll] = useState(false);
  const [error, setError] = useState('');
  const [userInfo, setUserInfo] = useState({});


  useEffect(() => {
      octokit.repos.listForUser({
          username: 'PavelPolyakov'
        })
        .then(response => {
          console.log("I am here 2");
          setRepoList(response.data);
          setIsLoading(false)
        })
        .catch(err => {
          console.log(err)
          setIsLoading(false);
          setRequestFailed(true);
          setError('User is not found');
        });

        octokit.users.getByUsername({
            username: 'PavelPolyakov'
          })
          .then(data => {
            console.log(data.data)
            setUserInfo(data.data);
            setIsLoading(false);
          })

    }, [] );


let reposToShow = [];

if (showAll !== true) {
   reposToShow = repoList.slice(0,3);
} else {
  reposToShow = repoList;
};

const onClickMore = () => {
    setShowAll(true);
  };


return (
    <div className={styles.wrap}>
        <h1 className={styles.title}>{isLoading ? <CircularProgress /> : 'Information'}</h1>
        {!isLoading &&
                <div>
                    {!requestFailed && <div className={styles.bio}>
                    <div>Hello, my name is {userInfo.name}</div>
                    <img className={styles.avatar} src={userInfo.avatar_url} alt={userInfo.name} />
              </div>
        }
        <ol>
            {reposToShow.map((repo, i) => (
              <li key={repo.id}>
                <a href={repo.html_url} target='blank' className = {styles.link}>
                  {repo.name} </a>
              </li>))}
          </ol>
          </div>
        }
        {requestFailed && <h2>{error}</h2>}
      {!showAll && <Button
           variant="contained"
           onClick = {onClickMore}>
           Show more
       </Button>}
    </div>
  );
}

export default AboutP;
