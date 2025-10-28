import { PageWrapper } from '@/components/layout/PageWrapper';

export default function FacilityLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <PageWrapper>
      {children}
    </PageWrapper>
  );
}