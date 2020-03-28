import React from 'react'
import Link from 'next/link'

const SideBar = () => {
  return (
      <div className="main-sidebar sidebar-style-2">
        <aside id="sidebar-wrapper">
          <div className="sidebar-brand">
            <a href="index.html">Stisla</a>
          </div>
          <div className="sidebar-brand sidebar-brand-sm">
            <a href="index.html">St</a>
          </div>
          <ul className="sidebar-menu">
            <li className="menu-header">Dashboard</li>
            <li className="dropdown active">
              <a href="#" className="nav-link has-dropdown"><i className="fas fa-fire" /><span>Dashboard</span></a>
              <ul className="dropdown-menu">
                <li><a className="nav-link" href="index-0.html">General Dashboard</a></li>
                <li className="active"><a className="nav-link" href="index.html">Ecommerce Dashboard</a></li>
              </ul>
            </li>
            <li className="menu-header">Pages</li>
            <li className="dropdown">
              <a href="#" className="nav-link has-dropdown"><i className="fas fa-bicycle" /> <span>Features</span></a>
              <ul className="dropdown-menu">
                <li><a className="nav-link" href="features-post-create.html">Post Create</a></li>
                <li><Link href="./post/Post"><a className="nav-link">Posts</a></Link></li>
              </ul>
            </li>
          </ul>
          <div className="mt-4 mb-4 p-3 hide-sidebar-mini">
            <a href="https://getstisla.com/docs" className="btn btn-primary btn-lg btn-block btn-icon-split">
              <i className="fas fa-rocket" /> Documentation
            </a>
          </div>
        </aside>
      </div>
  )
}

export default SideBar;