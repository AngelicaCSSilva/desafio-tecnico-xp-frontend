import React from 'react';
import { Link } from 'react-router-dom';

export default function Footer() {
  return (
    <nav>
      <Link to="/stocks">Ações</Link>
      <Link to="/bank">Conta</Link>
    </nav>
  );
}
