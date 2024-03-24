import { useState } from 'react';
import {
  EuiSwitch,
  EuiSpacer,
} from '@elastic/eui';


const HomePage = () => {
  const [isLoading, setLoading] = useState(false);
  const onToggleChange = (e:any) => {
    setLoading(e.target.checked);
  };
  return (
    <div>
      <EuiSpacer />
      <EuiSwitch
        label="Show as loading"
        checked={isLoading}
        onChange={onToggleChange}
      />
    </div>
  );
};

export default HomePage