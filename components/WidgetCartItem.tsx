import { WidgetInfo } from "@/StateStore";
import { Box, Button, Card, CardBody, CardHeader, Heading, Stack, StackDivider, Text } from "@chakra-ui/react";

export default function WidgetCardItem(item: WidgetInfo) {
  return (
    <Card
      className="border-black"
    >
      <CardBody>
        <CardHeader >
          <Heading size="md">
            { item.name }
          </Heading>
        </CardHeader>

        <Stack divider={<StackDivider />} spacing="4">

          <Box>
            <Text>
              { item.description }
            </Text>
          </Box>

          <Box>
            <Button>
              Add
            </Button>
          </Box>
        </Stack>
      </CardBody>
    </Card>
  );
}
