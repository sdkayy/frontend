import {
  CaretDownOutlined,
  CaretUpOutlined,
  SwapOutlined,
} from "@ant-design/icons";

export default function LeaderboardTableHeader({ sort, setSort }) {
  return (
    <tr className="text-[#737E76]">
      <th></th>
      <th>Rank</th>
      <th>
        <div className="flex items-center justify-center gap-1">
          <div>XP</div>
          <SwapOutlined
            rotate={90}
            onClick={() =>
              setSort({
                name: "xp",
                asc: { ...sort.asc, xp: !sort.asc.xp },
              })
            }
          />
          {sort.name === "xp" && (
            <div className="flex flex-col">
              {!sort.asc.xp ? <CaretUpOutlined /> : <CaretDownOutlined />}
            </div>
          )}
        </div>
      </th>
      <th>value</th>
      <th className="hidden md:table-cell">
        <div className="flex items-center justify-center gap-1">
          <div>Deposited</div>
          <SwapOutlined
            rotate={90}
            onClick={() =>
              setSort({
                name: "deposit",
                asc: { ...sort.asc, deposit: !sort.asc.deposit },
              })
            }
          />
          {sort.name === "deposit" && (
            <div className="flex flex-col">
              {!sort.asc.deposit ? <CaretUpOutlined /> : <CaretDownOutlined />}
            </div>
          )}
        </div>
      </th>
      <th className="hidden md:table-cell">
        <div className="flex items-center justify-center gap-1">
          <div>Withdrawn</div>
          <SwapOutlined
            rotate={90}
            onClick={() =>
              setSort({
                name: "withdrawn",
                asc: { ...sort.asc, withdrawn: !sort.asc.withdrawn },
              })
            }
          />
          {sort.name === "withdrawn" && (
            <div className="flex flex-col">
              {!sort.asc.withdrawn ? (
                <CaretUpOutlined />
              ) : (
                <CaretDownOutlined />
              )}
            </div>
          )}
        </div>
      </th>
      <th className="hidden md:table-cell">Deposit Ratio</th>
      <th>Address</th>
    </tr>
  );
}
