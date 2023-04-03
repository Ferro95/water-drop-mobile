import { useCallback, useState } from 'react';
import useMount from './useMount';

interface IOptions {
  params: Record<string, string>;
  manual: boolean;
  onSuccess: (res: unknown) => void;
  onError: (err: unknown) => void;
}

const useRequest = (
  service: (params: Record<string, string>) => Promise<unknown>,
  options: IOptions
) => {
  const [data, setData] = useState<unknown>();
  const [loading, setLoading] = useState(false);
  const { params, manual, onSuccess, onError } = options;

  const init = (currentParams: Record<string, string>) => {
    setLoading(true);
    return service(currentParams)
      .then((res) => {
        setData(res);
        setLoading(false);
        onSuccess && onSuccess(res);
      })
      .catch((err) => {
        setLoading(false);
        onError && onError(err);
      });
  };

  const initCallback = useCallback(init, [service]);

  useMount(() => {
    if (!manual) {
      initCallback(params);
    }
  });

  const run = (runParams: Record<string, string>) => {
    return initCallback(runParams);
  };

  return { loading, data, run };
};

export default useRequest;
