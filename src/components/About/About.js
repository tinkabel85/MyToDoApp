import React from 'react';
import styles from './About.module.css';
// import Formatting from '../Formatting/Formatting';
import CircularProgress from '@material-ui/core/CircularProgress';
import { Octokit } from '@octokit/rest';

const octokit = new Octokit();

class About extends React.Component {
    state = {
        isLoading: true,
        repoList: [],
        requestFailed: false,
        error: {},
        userInfo: {}
    }

    componentDidMount () {
          octokit.repos.listForUser({
           username: 'tinkabel85'
         })
         .then(response => {
           console.log(response.data)
           this.setState({
              repoList: response.data,
              isLoading: false

           });
        })
        .catch(err => {
          console.log(err)
          this.setState({
            requestFailed: true,
            isLoading: false,
            error: 'User is not found'
          })
        });


     octokit.users.getByUsername({
        username: 'tinkabel85'
      })
        .then(response => {
          console.log(response.data)
         this.setState({
             userInfo: response.data,
             isLoading: false
          })
        })

      }

    render() {
          const { isLoading, repoList, requestFailed, error, userInfo} = this.state;

          return (
              <div className={styles.wrap}>
                <h1 className={styles.title}>{ isLoading ?  <CircularProgress /> : 'Information'}</h1>
                {/* <Formatting>about me</Formatting> */}

                {!isLoading &&
                  <div>
                    {!requestFailed  && <div className={styles.bio}>
                          <img className={styles.avatar} src={userInfo.avatar_url} alt={userInfo.name} />
                          <p>Hello, my name is {userInfo.name}.</p>
                          <p> I live in {userInfo.location} and study Front-End.</p>
                          <p> Below you can find the list of my GitHub Repos. </p>
                      </div> }
                  <ul>
                        {repoList.map(repo => (<li key={repo.id}>
                          <a href={repo.html_url} target='blank' className = {styles.link}>
                          {repo.name} </a>
                        </li>))}
                </ul>
                </div>
              }
                  {requestFailed &&  <h2 className={styles.error}> {error} </h2>}
              </div>
          );
    }
  }


  export default About;
