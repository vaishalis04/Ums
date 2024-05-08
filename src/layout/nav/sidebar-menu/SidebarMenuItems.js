import React from 'react';
import classNames from 'classnames';
import { Dropdown } from 'react-bootstrap';
import { NavLink, useLocation } from 'react-router-dom';
import { useIntl } from 'react-intl';
import CsLineIcons from 'cs-line-icons/CsLineIcons';
import { USE_MULTI_LANGUAGE } from 'config.js';

const SidebarMenuItems = React.memo(({ menuItems = [ {
  path: '/dashboard',
  label: 'Dashboard',
  icon: 'dashboard',
},
{
  path: '/user-management',
  label: 'User Management',
  icon: 'user',
  subs: [
    {
      path: '/user-list',
      label: 'User List',
    },
    {
      path: '/add-user',
      label: 'Add User',
    },
    // Add more submenu items for User Management as needed
  ],
},] }) =>
  menuItems.map((item, index) => <SidebarMenuItem key={`menu.${item.path}.${index}`} id={item.path} item={item} />)
);
SidebarMenuItems.displayName = 'SidebarMenuItems';

const SidebarMenuItem = ({ item, id }) => {
  const { pathname } = useLocation();
  const { formatMessage: f } = useIntl();

  const isActive = item.path.startsWith('#') ? false : pathname === item.path || pathname.indexOf(`${item.path}/`) > -1;

  const getLabel = (icon, label) => (
    <>
      {icon && (
        <>
          <CsLineIcons icon={icon} className="cs-icon icon" />{' '}
        </>
      )}
      <span className="label">{USE_MULTI_LANGUAGE ? f({ id: label }) : label}</span>
    </>
  );

  if (item.subs) {
    return (
      <li>
        <Dropdown>
          <Dropdown.Toggle as="a" className={classNames({ active: isActive })} id={`dropdown-${id}`}>
            {getLabel(item.icon, item.label)}
          </Dropdown.Toggle>
          <Dropdown.Menu>
            {item.subs.map((subItem, subIndex) => (
              <Dropdown.Item key={`subMenu.${subItem.path}.${subIndex}`}>
                <NavLink to={subItem.path} className="dropdown-item">
                  {getLabel(subItem.icon, subItem.label)}
                </NavLink>
              </Dropdown.Item>
            ))}
          </Dropdown.Menu>
        </Dropdown>
      </li>
    );
  }
  if (item.isExternal) {
    return (
      <li key={id}>
        <a href={item.path} target="_blank" rel="noopener noreferrer">
          {getLabel(item.icon, item.label)}
        </a>
      </li>
    );
  }
  return (
    <li>
      <NavLink to={item.path} className={classNames({ active: isActive })} activeClassName="">
        {getLabel(item.icon, item.label)}
      </NavLink>
    </li>
  );
};

export default SidebarMenuItems;
