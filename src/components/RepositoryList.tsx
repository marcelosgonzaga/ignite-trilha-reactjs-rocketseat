import { useState, useEffect } from 'react';
import { RepositoryItem } from "./RepositoryItem";

import '../styles/repositories.scss';

// https: //api.github.com/orgns/rocketseat/repos

interface Repositoty {
  name: string;
  description: string;
  html_url: string;
}

export function RepostoryList() {
    const [repositories, setRepositories] = useState<Repositoty[]>([]);

    useEffect(() => {
        fetch('https://api.github.com/orgs/rocketseat/repos')
        .then(response => response.json())
        //.then(data => console.log(data))
        .then(data => setRepositories(data))
    }, []);


    return (
        <section className="repository-list">
            <h1>Lista de repositórios</h1>

            <ul>
        {repositories.map(repository => {
          return <RepositoryItem key={repository.name} repository={repository} />
        })}
      </ul>
        </section>
    );
}