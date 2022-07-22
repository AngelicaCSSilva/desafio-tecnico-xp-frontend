import React from 'react';

import { TableHead } from './styles/TableHead.style';

export default function StatementTableHead() {
  return (
    <thead>
      <tr>
        <TableHead>Data</TableHead>
        <TableHead>Descrição</TableHead>
        <TableHead>Valor</TableHead>
      </tr>
    </thead>
  );
}
