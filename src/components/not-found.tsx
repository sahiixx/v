import { Link } from "@tanstack/react-router";
import { Button } from "@/components/ui/button";
import { PageHeader } from "@/components/page-header";
import { Container } from "@/components/container";

export function NotFound() {
  return (
    <>
      <PageHeader
        kicker="404"
        title="Not in the dictionary"
        description="That page or term isn’t here. Search the living reference, or start from the four layers."
      />
      <Container className="flex flex-wrap gap-3 py-10">
        <Button asChild>
          <Link to="/">Home</Link>
        </Button>
        <Button asChild variant="outline">
          <Link to="/browse">Browse</Link>
        </Button>
        <Button asChild variant="ghost">
          <Link to="/az">A–Z</Link>
        </Button>
      </Container>
    </>
  );
}
