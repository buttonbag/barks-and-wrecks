import { gql } from "@apollo/client";
import client from "client";
import { BlockRenderer } from "components/BlockRenderer/BlockRenderer";
import { MainMenu } from "components/MainMenu";
import { Page } from "components/Page";
import { cleanAndTransformBlocks } from "utils/cleanAndTransformBlocks";
import { getPageStaticProps } from "utils/getPageStaticProps";
import { mapMenuItems } from "utils/mapMenuItems";

export default Page;

export const getStaticProps = getPageStaticProps;