/* libs */
import React from 'react'
import { BrowserRouter as Router, Route, Switch, Link, NavLink } from 'react-router-dom'

/* helpers */
import withStore from '../hocs/withStore'
import { routes, routesMap } from '../routes'

/* styles */
import moduleStyles from './app.module.scss'
import mainStyles from '../../scss/main.module.scss'

class App extends React.Component {

  state = {
    mobMenu: false
  }

  openMobMenu = () => {
    this.setState({ mobMenu: true })
  }

  hideMobMenu = () => {
    this.setState({ mobMenu: false })
  }

  render() {

    //to del later
    this.cartStore = this.props.rootStore.cart

    let routsContainers = routes.map((route) => {
      return <Route path={route.url}
        component={route.container}
        exact={route.exact}
        key={route.url}
      />
    })

    return (
      <Router>
        <>
          <header className={moduleStyles.header}>
            <div className={`${mainStyles.container} ${moduleStyles.container_mod}`}>
              <div className={`${moduleStyles.headerWrapper} ${mainStyles.noselect}`}>
                <div className={moduleStyles.logo}>
                  <Link to={routesMap.home}>
                    <span className={moduleStyles.logoParody}>Gparody</span>Shop
								</Link>
                </div>
                <menu className={moduleStyles.menu}>
                  <ul className={moduleStyles.menu__ul}>
                    <NavLink
                      className={moduleStyles.menu__a}
                      to={routesMap.televisions}
                      activeClassName={moduleStyles.activeLink}><li className={moduleStyles.menu__li}>
                        Телевизоры</li>
                    </NavLink>
                    <NavLink
                      className={moduleStyles.menu__a}
                      to={routesMap.phones}
                      activeClassName={moduleStyles.activeLink}><li className={moduleStyles.menu__li}>
                        Телефоны</li>
                    </NavLink>
                    <NavLink
                      className={moduleStyles.menu__a}
                      to={routesMap.tablets}
                      activeClassName={moduleStyles.activeLink}><li className={moduleStyles.menu__li}>
                        Планшеты</li>
                    </NavLink>
                  </ul>
                </menu>
                <div className={moduleStyles.cart}>
                  <NavLink
                    to={routesMap.cart}
                    activeClassName={moduleStyles.activeLink}>
                    Корзина
                  </NavLink>
                  {/* <div className={moduleStyles.totalInCart}>{this.cartStore.totalPositionsInCart}</div> */}
                  <div className={moduleStyles.totalInCart}>
                    <p>{this.cartStore.totalProductsInCart}</p>
                  </div>
                </div>
                <div className={moduleStyles.burger}
                  onClick={this.openMobMenu}>
                  <div></div>
                  <div></div>
                  <div></div>
                </div>
              </div>
            </div>
          </header>

          {/* content */}
          <main className={moduleStyles.content}>
            <div className={`${mainStyles.container} ${moduleStyles.container_mod}`}>
              <Switch>
                {routsContainers}
              </Switch>
            </div>
          </main>

          {/* mobMenu */}
          {
            this.state.mobMenu &&
            <menu className={moduleStyles.mobMenu}>
              <div className={moduleStyles.closeMobMenu}
                onClick={this.hideMobMenu}>
                <div></div>
                <div></div>
              </div>
              <ul>
                <NavLink
                  className={moduleStyles.menu__a}
                  to={routesMap.cart}
                  activeClassName={moduleStyles.activeLink}><li className={moduleStyles.menu__li}
                    onClick={this.hideMobMenu}>
                    Корзина</li>
                </NavLink>
                <NavLink
                  className={moduleStyles.menu__a}
                  to={routesMap.televisions}
                  activeClassName={moduleStyles.activeLink}><li className={moduleStyles.menu__li}
                    onClick={this.hideMobMenu}>Телевизоры</li>
                </NavLink>
                <NavLink
                  className={moduleStyles.menu__a}
                  to={routesMap.phones}
                  activeClassName={moduleStyles.activeLink}><li className={moduleStyles.menu__li}
                    onClick={this.hideMobMenu}>Телефоны</li>
                </NavLink>
                <NavLink
                  className={moduleStyles.menu__a}
                  to={routesMap.tablets}
                  activeClassName={moduleStyles.activeLink}><li className={moduleStyles.menu__li}
                    onClick={this.hideMobMenu}>Планшеты</li>
                </NavLink>
              </ul>
            </menu>
          }

        </>
      </Router >
    )
  }
}

export default withStore(App)
