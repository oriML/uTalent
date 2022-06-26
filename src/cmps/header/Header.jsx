import React from 'react'
import { Container, Content, Title } from './style';
import { IoAlertCircleOutline } from 'react-icons/io5'

const Header = ({type, title, content}) => {
  return (
    <Container>
        <Title>
            {title}
        </Title>
        <Content>
            {type === 'profile' && <IoAlertCircleOutline />}
            {content}
        </Content>
    </Container>
  )
}

export default Header;