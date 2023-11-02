import React, { useState } from "react";
import pluginId from "../../pluginId";
import {
    ActionLayout,
    Avatar,
    BaseCheckbox,
    Box,
    Button,
    ContentLayout,
    Flex,
    HeaderLayout,
    IconButton,
    Layout,
    SubNav,
    SubNavHeader,
    SubNavLink,
    SubNavLinkSection,
    SubNavSection,
    SubNavSections,
    TFooter,
    Table,
    Tag,
    Tbody,
    Td,
    Th,
    Thead,
    Tr,
    Typography,
    VisuallyHidden,
} from "@strapi/design-system";
import {
    Apps,
    Pencil,
    Plus,
    Trash,
    User,
} from "@strapi/icons";

const HomePage = () => {
    const links = [
        {
            id: 1,
            label: "User",
            icon: <User />,
            to: "/plugins/user",
        },
        {
            id: 2,
            label: "Categories",
            to: "/category",
        },
        {
            id: 3,
            label: "Cities",
            // icon: <Apps />,
            to: "/city",
            active: true,
        },
        {
            id: 4,
            label: "Countries",
            to: "/country",
        },
    ];
    const ROW_COUNT = 6;
    const COL_COUNT = 10;
    const entry = {
        cover: "https://avatars.githubusercontent.com/u/3874873?v=4",
        description: "Chez Léon is a human sized Parisian",
        category: "French cuisine",
        contact: "Leon Lafrite",
    };
    const entries: Array<
        {
            id: number;
        } & typeof entry
    > = [];
    for (let i = 0; i < 5; i++) {
        entries.push({
            ...entry,
            id: i,
        });
    }
    const [todoData, setTodoData] = useState([]);
    return (
        <Box background="neutral100">
            <Layout
                sideNav={
                    <SubNav ariaLabel="Builder sub nav">
                        <SubNavHeader
                            id
                            searchable={true}
                            value=""
                            label="Content"
                            searchLabel="Search..."
                        />
                        <SubNavSections>
                            <SubNavSection
                                id
                                label="Collection Type"
                                collapsable
                                badgeLabel={links.length.toString()}
                            >
                                {links.map((link) => (
                                    <SubNavLink
                                        icon={link.icon}
                                        to={link.to}
                                        active={link.active}
                                        key={link.id}
                                    >
                                        {link.label}
                                    </SubNavLink>
                                ))}
                            </SubNavSection>
                            <SubNavSection
                                id
                                label="Single Type"
                                collapsable
                                badgeLabel={"0"}
                            >
                                <SubNavLinkSection id label="Default">
                                    {/* {links.map((link) => (
                    <SubNavLink icon={<Pencil />} to={link.to} key={link.id}>
                      {link.label}
                    </SubNavLink>
                  ))} */}
                                </SubNavLinkSection>
                            </SubNavSection>
                        </SubNavSections>
                    </SubNav>
                }
            >
                <>
                    <HeaderLayout
                        primaryAction={<Button startIcon={<Plus />}>Add an entry</Button>}
                        secondaryAction={
                            <Button variant="tertiary" startIcon={<Pencil />}>
                                Edit
                            </Button>
                        }
                        title="Other CT"
                        subtitle="36 entries found"
                        as="h2"
                    />
                    <ActionLayout
                        startActions={
                            <>
                                {Array(20)
                                    .fill(null)
                                    .map((_, index) => (
                                        <Box paddingTop={2} key={index}>
                                            <Tag
                                                onClick={() => { }}
                                                key={index}
                                                icon={<Plus aria-hidden />}
                                            >
                                                Hello world{index}
                                            </Tag>
                                        </Box>
                                    ))}
                            </>
                        }
                        endActions={
                            <>
                                <Button size="M" variant="tertiary">
                                    Settings
                                </Button>
                                <Button size="M" variant="tertiary">
                                    Settings
                                </Button>
                            </>
                        }
                    />
                    <ContentLayout>
                        <Table
                            colCount={COL_COUNT}
                            rowCount={ROW_COUNT}
                            footer={
                                <TFooter icon={<Plus />}>
                                    Add another field to this collection type
                                </TFooter>
                            }
                        >
                            <Thead>
                                <Tr>
                                    <Th action={() => { }}>
                                        <BaseCheckbox aria-label="Select all entries" />
                                    </Th>
                                    <Th action={() => { }}>
                                        <Typography variant="sigma">ID</Typography>
                                    </Th>
                                    <Th action={() => { }}>
                                        <Typography variant="sigma">Cover</Typography>
                                    </Th>
                                    <Th action={() => { }}>
                                        <Typography variant="sigma">Description</Typography>
                                    </Th>
                                    <Th action={() => { }}>
                                        <Typography variant="sigma">Categories</Typography>
                                    </Th>
                                    <Th action={() => { }}>
                                        <Typography variant="sigma">Contact</Typography>
                                    </Th>
                                    <Th action={() => { }}>More</Th>
                                    <Th action={() => { }}>More</Th>
                                    <Th action={() => { }}>More</Th>
                                    <Th action={() => { }}>
                                        <VisuallyHidden>Actions</VisuallyHidden>
                                    </Th>
                                </Tr>
                            </Thead>
                            <Tbody>
                                {entries.map((entry) => (
                                    <Tr key={entry.id}>
                                        <Td>
                                            <BaseCheckbox aria-label={`Select ${entry.contact}`} />
                                        </Td>
                                        <Td>
                                            <Typography textColor="neutral800">{entry.id}</Typography>
                                        </Td>
                                        <Td>
                                            <Avatar
                                                preview={""}
                                                src={entry.cover}
                                                alt={entry.contact}
                                            />
                                        </Td>
                                        <Td>
                                            <Typography textColor="neutral800">
                                                {entry.description}
                                            </Typography>
                                        </Td>
                                        <Td>
                                            <Typography textColor="neutral800">
                                                {entry.category}
                                            </Typography>
                                        </Td>
                                        <Td>
                                            <Typography textColor="neutral800">
                                                {entry.contact}
                                            </Typography>
                                        </Td>
                                        <Td>
                                            <Typography textColor="neutral800">
                                                {entry.description}
                                            </Typography>
                                        </Td>
                                        <Td>
                                            <Typography textColor="neutral800">
                                                {entry.description}
                                            </Typography>
                                        </Td>
                                        <Td>
                                            <Typography textColor="neutral800">
                                                {entry.description}
                                            </Typography>
                                        </Td>
                                        <Td>
                                            <Flex>
                                                <IconButton
                                                    onClick={() => console.log("edit")}
                                                    label="Edit"
                                                    icon={<Pencil />}
                                                />
                                                <Box paddingLeft={1}>
                                                    <IconButton
                                                        onClick={() => console.log("edit")}
                                                        label="Delete"
                                                        icon={<Trash />}
                                                    />
                                                </Box>
                                            </Flex>
                                        </Td>
                                    </Tr>
                                ))}
                            </Tbody>
                        </Table>
                    </ContentLayout>
                </>
            </Layout>
        </Box>
    );
};

export default HomePage;
