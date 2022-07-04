import React, { useState, useEffect } from 'react';
import styles from './About.module.css';
import CircularProgress from '@material-ui/core/CircularProgress';
import { Octokit } from '@octokit/rest';
import location from './img/location.svg';
import ReactPaginate from 'react-paginate';

const octokit = new Octokit();

const About = () => {
  const [isLoading, setIsLoading] = useState(true);
  const [repoList, setRepoList] = useState([]);
  const [requestFailed, setRequestFailed] = useState(false);
  const [error, setError] = useState('');
  const [userInfo, setUserInfo] = useState({});
  const [pageNumber, setPageNumber] = useState(0);

  useEffect(() => {
    octokit.repos.listForUser({
      username: 'tinkabel85'
    })
      .then(response => {
        setRepoList(response.data);
        setIsLoading(false);
      })
      .catch(err => {
        setRequestFailed(true);
        setIsLoading(false);
        setError('Something went wrong...');
      });

    octokit.users.getByUsername({
      username: 'tinkabel85'
    })
      .then(response => {
        setUserInfo(response.data);
        setIsLoading(false);
      })
      .catch(err => {
        setRequestFailed(true);
        setIsLoading(false);
        setError('Something went wrong...');
      })

  }, []);



  const reposPerPage = 4;
  const reposSeen = pageNumber * reposPerPage;
  const displayRepos = repoList.slice(reposSeen, reposSeen + reposPerPage);
  const pageCount = Math.ceil(repoList.length / reposPerPage);
  const changePage = ({ selected }) => {
    setPageNumber(selected)
  }


  return (
    <div className={styles.wrap}>
      {isLoading ? <CircularProgress /> :
        <div>
          {!isLoading &&
            <div>
              {!requestFailed &&
                <div className={styles.header}>
                  <div>
                    <img className={styles.avatar} src={userInfo.avatar_url} alt={userInfo.name} />
                  </div>
                  <div className={styles.info}>
                    <h1 className={styles.info_name}>{userInfo.name}</h1>
                    <img className={styles.location} src={location} alt='location'></img>
                    <div className={styles.info_city}> {userInfo.location}</div>
                    <div className={styles.info_bio}> {userInfo.bio}</div>
                    <a className={styles.link} href={userInfo.html_url} target='blank' >Here is my GitHub account.</a>
                  </div>
                </div>}
              <ul className={styles.repos_all}>
                {displayRepos.map(repo => (<li key={repo.id} className={styles.repos}>
                  <div className={styles.repos_name}>
                    <a href={repo.html_url} target='blank' className={styles.repos_link}>
                      {repo.name}
                    </a>
                    <a target='_blank' rel='noreferrer' className={styles.repos_host}
                      href={(() => {
                        let url = '';
                        if (repo.name === 'MyToDoApp') {
                          url = 'https://tinkabel.netlify.app/';
                        } else if (repo.name === 'City4mini') {
                          url = 'https://city4mini.herokuapp.com/'

                        } else {
                          url = `https://tinkabel85.github.io/${repo.name}`
                        }
                        return url;
                      })()}
                    >
                      Demo</a>
                  </div>
                  <div className={styles.repos__info}>
                    <div className={styles.lang}>
                      <span className={[styles.circle, styles[repo.language]].join(' ')}></span>
                      <span className={styles.repos_lang}> {repo.language}</span>
                    </div>
                    <span className={styles.star}>{repo.stargazers_count}</span>
                    <span className={styles.fork}>{repo.forks_count}</span>
                    <span className={styles.repos_date}> Updated on {new Date(repo.updated_at).toLocaleDateString('en-US',
                      { year: 'numeric', month: 'short', day: 'numeric' })}
                    </span>
                  </div>
                </li>))}
              </ul>
              <ReactPaginate
                previousLabel={'Previous'}
                nextLabel={'Next'}
                pageCount={pageCount}
                onPageChange={changePage}
                containerClassName={styles.paginationBttns}
                previousLinkClassName={styles.previousBttn}
                nextLinkClassName={styles.nextBttn}
                disabledClassName={styles.paginationDisabled}
                activeClassName={styles.paginationActive}
              />
            </div>
          }
        </div>
      }
      {requestFailed && <h2 className={styles.error}> {error} </h2>}

    </div>
  );
};

export default About;
