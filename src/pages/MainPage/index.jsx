import React, { useState } from "react";

import {MdSearch} from 'react-icons/md'

import { Container,Logo, Title, Form, Input, Button } from "./styles";

import githubLogo from '../../assets/images/github-logo.svg'

export default function MainPage() {
  const [login, setLogin] = useState('');

  const handleKeyPress = (event) => {
    if (event.key === 'Enter') {
      const link = `/${login}/repositories`;
      window.location.href = link;
    }
  };

  return (
    <Container>
      <Logo src={githubLogo} alt='API Github' />
      <Title>GitHub Profiles</Title>
      <Form>
        <Input
          placeholder="Ex: andrebaltieri"
          value={login}
          onChange={(event) => setLogin(event.target.value)}
          onKeyPress={handleKeyPress}
        />
        <Button to={`/${login}/repositories`}>
          <MdSearch size={42}/>
        </Button>
      </Form>
    </Container>
  );
}
