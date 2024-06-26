import { authenticate } from '$lib/utils/auth';
import { getAssetInfoFromParam } from '$lib/utils/navigation';
import { getUser } from '@immich/sdk';
import type { PageLoad } from './$types';

export const load = (async ({ params }) => {
  await authenticate();

  const partner = await getUser({ id: params.userId });
  const asset = await getAssetInfoFromParam(params);
  return {
    asset,
    partner,
    meta: {
      title: 'Partner',
    },
  };
}) satisfies PageLoad;
