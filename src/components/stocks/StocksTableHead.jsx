import React from 'react';

import { TableHead } from './styles/TableHead.style';

export default function StocksTableHead() {
  return (
    <thead>
      <tr>
        <TableHead>Ação</TableHead>
        <TableHead>Qtde.</TableHead>
        <TableHead>Valor (R$)</TableHead>
        <TableHead>Operação</TableHead>
      </tr>
    </thead>
  );
}
