import * as React from 'react'
import styled from 'styled-components'
import Image from 'next/image'
import { useRouter } from 'next/router'
import Link from 'next/link'

import signOutIcon from '../../public/sign-out.svg'
import Logo from '@/components/logo'
import { useAuth } from '@/contexts/auth-context'
import { UserPermission } from '@/types'
import { LogOut } from 'react-feather'

const Container = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  height: 100vh;
`
const Header = styled.div`
  display: flex;
  padding: 0 20px;
  justify-content: space-between;
`
const Config = styled.div`
  display: flex;
  align-items: center;

  & > span {
    font-weight: bold;
    margin: 0px 10px;
  }
  & > span:hover {
    text-decoration: underline;
    cursor: pointer;
  }
`
const IconSignOut = styled(LogOut)`
  cursor: pointer;
  stroke: var(--color-text);
`

const Main = styled.div`
  flex: 1;
`

const Menu = styled.div`
  display: flex;
  align-items: center;
  gap: 20px;

  & > ul {
    list-style-type: none;
  }

  & > ul > li {
    float: left;
    margin: 0 10px;
  }
`

type StyledLinkProps = {
  active?: boolean
}

const StyledLink = styled.a<StyledLinkProps>`
  font-size: 20px;
  font-weight: 500;
  text-decoration: none;
  color: ${props => (props.active ? 'var(--red)' : 'var(--black)')};

  &:hover {
    text-decoration: underline;
    cursor: pointer;
  }
`

type LayoutProps = {
  children?: React.ReactNode
}

export default function Layout({ children }: LayoutProps) {
  const { signOut, user } = useAuth()
  const router = useRouter()

  return (
    <Container>
      <Header>
        <Menu>
          <Logo width="50" height="50" onClick={() => router.push('/painel')} />
          <ul>
            <li>
              <Link href="/painel" passHref>
                <StyledLink active={router.pathname === '/painel'}>
                  comparador
                </StyledLink>
              </Link>
            </li>
            <li>
              <Link href="/painel/usuario" passHref>
                <StyledLink active={router.pathname === '/painel/usuario'}>
                  editar dados
                </StyledLink>
              </Link>
            </li>
            {user?.permission === UserPermission.ADMIN ? (
              <>
                <li>
                  <Link href="/painel/adicionar-pais" passHref>
                    <StyledLink
                      active={router.pathname === '/painel/adicionar-pais'}
                    >
                      adicionar pais
                    </StyledLink>
                  </Link>
                </li>
                <li>
                  <Link href="/painel/adicionar-indicador" passHref>
                    <StyledLink
                      active={router.pathname === '/painel/adicionar-indicador'}
                    >
                      adicionar indicador
                    </StyledLink>
                  </Link>
                </li>
                <li>
                  <Link href="/painel/relatorios" passHref>
                    <StyledLink
                      active={router.pathname === '/painel/relatorios'}
                    >
                      relatórios
                    </StyledLink>
                  </Link>
                </li>
              </>
            ) : null}
          </ul>
        </Menu>
        <Config>
          <span onClick={() => router.push('/painel/usuario')}>
            {user?.name.split(' ').slice(0, 2).join(' ')}
          </span>
          <IconSignOut title="sair" onClick={() => signOut()} />
        </Config>
      </Header>
      <Main>{children}</Main>
    </Container>
  )
}
