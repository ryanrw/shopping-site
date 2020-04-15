interface TableProps {
  data: {
    heads: (string | number)[]
    content: any[][]
  }
}

export const Table: React.FC<TableProps> = ({ data }) => (
  <table>
    <thead>
      <tr>
        {data.heads.map(header => (
          <th key={header}>{header}</th>
        ))}
      </tr>
    </thead>
    <tbody>
      {data.content.map((row, index) => (
        <tr key={index}>
          {row.map(content => (
            <td key={content}>{content}</td>
          ))}
        </tr>
      ))}
    </tbody>
  </table>
)
