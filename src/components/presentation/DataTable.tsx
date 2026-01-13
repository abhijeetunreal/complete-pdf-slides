import { motion } from "framer-motion";

interface Column {
  key: string;
  header: string;
  width?: string;
}

interface DataTableProps {
  columns: Column[];
  data: Record<string, string | number | React.ReactNode>[];
  compact?: boolean;
}

export const DataTable = ({ columns, data, compact = false }: DataTableProps) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, delay: 0.2 }}
      className="overflow-x-auto rounded-xl border border-border"
    >
      <table className="data-table">
        <thead>
          <tr>
            {columns.map((col, i) => (
              <th key={col.key} style={{ width: col.width }}>
                {col.header}
              </th>
            ))}
          </tr>
        </thead>
        <tbody>
          {data.map((row, rowIndex) => (
            <motion.tr
              key={rowIndex}
              initial={{ opacity: 0, x: -10 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.3, delay: 0.1 * rowIndex }}
            >
              {columns.map((col) => (
                <td key={col.key} className={compact ? "py-2" : ""}>
                  {row[col.key]}
                </td>
              ))}
            </motion.tr>
          ))}
        </tbody>
      </table>
    </motion.div>
  );
};
