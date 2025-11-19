import DetailSection from "../Section/DetailSection";

type Props = {
  name?: string | null;
  loading?: boolean;
  error?: any;
};

const DetailTemp = ({ name, loading, error }: Props) => {
  return (
    <div>
      <DetailSection name={name} loading={loading} error={error} />
    </div>
  );
};

export default DetailTemp;
