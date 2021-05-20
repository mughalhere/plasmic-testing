// @ts-nocheck
/* eslint-disable */
/* tslint:disable */
/* prettier-ignore-start */

/** @jsxRuntime classic */
/** @jsx createPlasmicElementProxy */
/** @jsxFrag React.Fragment */

// This class is auto-generated by Plasmic; please do not edit!
// Plasmic Project: qu735wuefV1gEcZzLTamke
// Component: 3oUZzgoVEhbjK
import * as React from "react";

import * as p from "@plasmicapp/react-web";
import {
  hasVariant,
  classNames,
  wrapWithClassName,
  createPlasmicElementProxy,
  makeFragment,
  MultiChoiceArg,
  SingleBooleanChoiceArg,
  SingleChoiceArg,
  pick,
  omit,
  useTrigger,
  StrictProps,
  deriveRenderOpts,
  ensureGlobalVariants
} from "@plasmicapp/react-web";
import Header from "../../Header"; // plasmic-import: XHBTGbe1iCUkc/component
import TopSection from "../../TopSection"; // plasmic-import: Mwqxqe6RamYqX/component
import Section from "../../Section"; // plasmic-import: A-hPPlfIgwHZD/component
import FeatureCard from "../../FeatureCard"; // plasmic-import: aN0nn6HQKSe6G/component
import Testimonial from "../../Testimonial"; // plasmic-import: -6lu5GlkuIthA4/component
import HomeCta from "../../HomeCta"; // plasmic-import: 47mcyif_g20zP/component
import Footer from "../../Footer"; // plasmic-import: iYOJPSPOlC7NN/component

import { useScreenVariants } from "./PlasmicGlobalVariant__Screen"; // plasmic-import: _-_j3P8eZlhu6Q/globalVariant

import "@plasmicapp/react-web/lib/plasmic.css";
import * as defaultcss from "../plasmic__default_style.module.css"; // plasmic-import: global/defaultcss
import * as projectcss from "./plasmic_simple_light_landing_page.module.css"; // plasmic-import: qu735wuefV1gEcZzLTamke/projectcss
import * as sty from "./PlasmicHome.module.css"; // plasmic-import: 3oUZzgoVEhbjK/css

import LightningIcon from "./icons/PlasmicIcon__Lightning"; // plasmic-import: gO9uWyUFNGi9vx/icon
import HammerIcon from "./icons/PlasmicIcon__Hammer"; // plasmic-import: bCpeE0AoruU_CN/icon
import PencilIcon from "./icons/PlasmicIcon__Pencil"; // plasmic-import: dHDQmcM5Cz5bh1/icon
import SwapIcon from "./icons/PlasmicIcon__Swap"; // plasmic-import: 261eLyB_ITdbVl/icon
import SlotIcon from "./icons/PlasmicIcon__Slot"; // plasmic-import: UP_Ls8Vkww8te7/icon
import CycleIcon from "./icons/PlasmicIcon__Cycle"; // plasmic-import: CyorHDgqshSMxz/icon
import FacebookLogoIcon from "./icons/PlasmicIcon__FacebookLogo"; // plasmic-import: F-G-zBEZmfHHnv/icon
import TinderLogoIcon from "./icons/PlasmicIcon__TinderLogo"; // plasmic-import: sMKnwQrUSRiIfr/icon
import AirbnbLogoIcon from "./icons/PlasmicIcon__AirbnbLogo"; // plasmic-import: vPH_mrh3cGwr1d/icon
import HubspotLogoIcon from "./icons/PlasmicIcon__HubspotLogo"; // plasmic-import: ViEKJubuYyVpZu/icon
import AmazonLogoIcon from "./icons/PlasmicIcon__AmazonLogo"; // plasmic-import: 75nHXuqvaiNo9F/icon
import simpleProjectIoUlTfYcK57FEm from "./images/simpleProject.png"; // plasmic-import: IoUlTfYcK57FEm/picture
import taskP04EGHhGiqc8Lq from "./images/task.png"; // plasmic-import: P04eGHhGiqc8Lq/picture

export type PlasmicHome__VariantMembers = {};

export type PlasmicHome__VariantsArgs = {};
type VariantPropType = keyof PlasmicHome__VariantsArgs;
export const PlasmicHome__VariantProps = new Array<VariantPropType>();

export type PlasmicHome__ArgsType = {};
type ArgPropType = keyof PlasmicHome__ArgsType;
export const PlasmicHome__ArgProps = new Array<ArgPropType>();

export type PlasmicHome__OverridesType = {
  root?: p.Flex<"div">;
  header?: p.Flex<typeof Header>;
  topSection?: p.Flex<typeof TopSection>;
  testimonial?: p.Flex<typeof Testimonial>;
  homeCta?: p.Flex<typeof HomeCta>;
  footer?: p.Flex<typeof Footer>;
};

export interface DefaultHomeProps {
  className?: string;
}

function PlasmicHome__RenderFunc(props: {
  variants: PlasmicHome__VariantsArgs;
  args: PlasmicHome__ArgsType;
  overrides: PlasmicHome__OverridesType;
  dataFetches?: PlasmicHome__Fetches;
  forNode?: string;
}) {
  const { variants, args, overrides, forNode, dataFetches } = props;

  const globalVariants = ensureGlobalVariants({
    screen: useScreenVariants()
  });

  return (
    <React.Fragment>
      <div className={defaultcss.plasmic_page_wrapper}>
        <div
          data-plasmic-name={"root"}
          data-plasmic-override={overrides.root}
          data-plasmic-root={true}
          data-plasmic-for-node={forNode}
          className={classNames(
            defaultcss.all,
            projectcss.root_reset,
            sty.root
          )}
        >
          <p.Stack
            as={"div"}
            hasGap={true}
            className={classNames(defaultcss.all, sty.box___5Ktf)}
          >
            <Header
              data-plasmic-name={"header"}
              data-plasmic-override={overrides.header}
              className={classNames("__wab_instance", sty.header)}
            />

            <TopSection
              data-plasmic-name={"topSection"}
              data-plasmic-override={overrides.topSection}
              className={classNames("__wab_instance", sty.topSection)}
            />

            <Section
              className={classNames("__wab_instance", sty.section__faERf)}
              subtitle={
                "Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur excepteur sint occaecat cupidatat."
              }
              title={"Explore the solutions"}
            />

            <p.Stack
              as={"div"}
              hasGap={true}
              className={classNames(defaultcss.all, sty.box__b38Ek)}
            >
              <p.Stack
                as={"div"}
                hasGap={true}
                className={classNames(defaultcss.all, sty.box__nGMtX)}
              >
                <div
                  className={classNames(
                    defaultcss.all,
                    defaultcss.__wab_text,
                    sty.box__pc4R9
                  )}
                >
                  {"Powerful suite of tools"}
                </div>

                <div
                  className={classNames(
                    defaultcss.all,
                    defaultcss.__wab_text,
                    sty.box__std4
                  )}
                >
                  {
                    "Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa."
                  }
                </div>

                <FeatureCard
                  className={classNames(
                    "__wab_instance",
                    sty.featureCard__qpO23
                  )}
                  description={
                    "Taking collaboration to the next level with security and administrative features built for teams"
                  }
                  iconBack={
                    <LightningIcon
                      className={classNames(defaultcss.all, sty.svg__sP6W6)}
                      role={"img"}
                    />
                  }
                  long={"long" as const}
                  title={"Building the Simple ecosystem"}
                />

                <FeatureCard
                  className={classNames(
                    "__wab_instance",
                    sty.featureCard__yq63X
                  )}
                  description={
                    "Taking collaboration to the next level with security and administrative features built for teams"
                  }
                  iconBack={
                    <HammerIcon
                      className={classNames(defaultcss.all, sty.svg__un54N)}
                      role={"img"}
                    />
                  }
                  long={"long" as const}
                  title={"Building the Simple Ecosystem"}
                />

                <FeatureCard
                  className={classNames(
                    "__wab_instance",
                    sty.featureCard__oj6S
                  )}
                  description={
                    "Taking collaboration to the next level with security and administrative features built for teams"
                  }
                  iconBack={
                    <PencilIcon
                      className={classNames(defaultcss.all, sty.svg__lmmQ5)}
                      role={"img"}
                    />
                  }
                  long={"long" as const}
                  title={"Building the Simple Ecosystem"}
                />
              </p.Stack>

              <div className={classNames(defaultcss.all, sty.box__miBap)}>
                <img
                  alt={""}
                  className={classNames(defaultcss.img, sty.img__eRoSl)}
                  role={"img"}
                  src={simpleProjectIoUlTfYcK57FEm}
                />

                <img
                  alt={""}
                  className={classNames(defaultcss.img, sty.img__hMbS)}
                  role={"img"}
                  src={taskP04EGHhGiqc8Lq}
                />
              </div>
            </p.Stack>

            <div className={classNames(defaultcss.all, sty.box___5NzZq)}>
              <div className={classNames(defaultcss.all, sty.box__p19S)} />

              <Section
                className={classNames("__wab_instance", sty.section__n6HoG)}
                subtitle={
                  "Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur excepteur sint occaecat cupidatat."
                }
                title={"How Simple works"}
              />

              <p.Stack
                as={"div"}
                hasGap={true}
                className={classNames(defaultcss.all, sty.box__lSUpo)}
              >
                <FeatureCard
                  className={classNames(
                    "__wab_instance",
                    sty.featureCard__coPtJ
                  )}
                  description={
                    "Lorem ipsum dolor sit amet, consectetur adipiscing elit."
                  }
                  iconFront={
                    <SwapIcon
                      className={classNames(defaultcss.all, sty.svg__fRod0)}
                      role={"img"}
                    />
                  }
                  title={"Initial Contact"}
                />

                <FeatureCard
                  className={classNames(
                    "__wab_instance",
                    sty.featureCard__l8Ydb
                  )}
                  description={
                    "Lorem ipsum dolor sit amet, consectetur adipiscing elit."
                  }
                  iconFront={
                    <SlotIcon
                      className={classNames(defaultcss.all, sty.svg__fsqAy)}
                      role={"img"}
                    />
                  }
                  title={"Discovery Session"}
                />

                <FeatureCard
                  className={classNames(
                    "__wab_instance",
                    sty.featureCard___3B5Iy
                  )}
                  description={
                    "Lorem ipsum dolor sit amet, consectetur adipiscing elit."
                  }
                  iconFront={
                    <CycleIcon
                      className={classNames(defaultcss.all, sty.svg__wnAik)}
                      role={"img"}
                    />
                  }
                  title={"Contracting"}
                />

                <FeatureCard
                  className={classNames(
                    "__wab_instance",
                    sty.featureCard__ftBfO
                  )}
                  description={
                    "Lorem ipsum dolor sit amet, consectetur adipiscing elit."
                  }
                  iconFront={
                    <HammerIcon
                      className={classNames(defaultcss.all, sty.svg__np2P0)}
                      role={"img"}
                    />
                  }
                  title={"Fast Prototyping"}
                />

                <FeatureCard
                  className={classNames(
                    "__wab_instance",
                    sty.featureCard__wmR6S
                  )}
                  description={
                    "Lorem ipsum dolor sit amet, consectetur adipiscing elit."
                  }
                  iconFront={
                    <PencilIcon
                      className={classNames(defaultcss.all, sty.svg__lAxyb)}
                      role={"img"}
                    />
                  }
                  title={"Design Phase"}
                />

                <FeatureCard
                  className={classNames(
                    "__wab_instance",
                    sty.featureCard__eFpDd
                  )}
                  description={
                    "Lorem ipsum dolor sit amet, consectetur adipiscing elit."
                  }
                  iconFront={
                    <LightningIcon
                      className={classNames(defaultcss.all, sty.svg__aUcVs)}
                      role={"img"}
                    />
                  }
                  title={"Develop & Launch"}
                />
              </p.Stack>

              <div className={classNames(defaultcss.all, sty.box__lCpjp)} />
            </div>

            <Section
              className={classNames("__wab_instance", sty.section___76AEh)}
            />

            <p.Stack
              as={"div"}
              hasGap={true}
              className={classNames(defaultcss.all, sty.box__abDzl)}
            >
              <FacebookLogoIcon
                className={classNames(defaultcss.all, sty.svg__h1Ld7)}
                role={"img"}
              />

              <TinderLogoIcon
                className={classNames(defaultcss.all, sty.svg__zNDl0)}
                role={"img"}
              />

              <AirbnbLogoIcon
                className={classNames(defaultcss.all, sty.svg__zkgxY)}
                role={"img"}
              />

              <HubspotLogoIcon
                className={classNames(defaultcss.all, sty.svg__mpL38)}
                role={"img"}
              />

              <AmazonLogoIcon
                className={classNames(defaultcss.all, sty.svg__laQDk)}
                role={"img"}
              />
            </p.Stack>

            <Testimonial
              data-plasmic-name={"testimonial"}
              data-plasmic-override={overrides.testimonial}
              className={classNames("__wab_instance", sty.testimonial)}
            />

            <HomeCta
              data-plasmic-name={"homeCta"}
              data-plasmic-override={overrides.homeCta}
              className={classNames("__wab_instance", sty.homeCta)}
            />

            <Footer
              data-plasmic-name={"footer"}
              data-plasmic-override={overrides.footer}
              className={classNames("__wab_instance", sty.footer)}
            />
          </p.Stack>
        </div>
      </div>
    </React.Fragment>
  ) as React.ReactElement | null;
}

const PlasmicDescendants = {
  root: ["root", "header", "topSection", "testimonial", "homeCta", "footer"],
  header: ["header"],
  topSection: ["topSection"],
  testimonial: ["testimonial"],
  homeCta: ["homeCta"],
  footer: ["footer"]
} as const;
type NodeNameType = keyof typeof PlasmicDescendants;
type DescendantsType<T extends NodeNameType> =
  typeof PlasmicDescendants[T][number];
type NodeDefaultElementType = {
  root: "div";
  header: typeof Header;
  topSection: typeof TopSection;
  testimonial: typeof Testimonial;
  homeCta: typeof HomeCta;
  footer: typeof Footer;
};

type ReservedPropsType = "variants" | "args" | "overrides";
type NodeOverridesType<T extends NodeNameType> = Pick<
  PlasmicHome__OverridesType,
  DescendantsType<T>
>;
type NodeComponentProps<T extends NodeNameType> =
  // Explicitly specify variants, args, and overrides as objects
  {
    variants?: PlasmicHome__VariantsArgs;
    args?: PlasmicHome__ArgsType;
    overrides?: NodeOverridesType<T>;
    dataFetches?: PlasmicHome__Fetches;
  } & Omit<PlasmicHome__VariantsArgs, ReservedPropsType> & // Specify variants directly as props
    // Specify args directly as props
    Omit<PlasmicHome__ArgsType, ReservedPropsType> &
    // Specify overrides for each element directly as props
    Omit<
      NodeOverridesType<T>,
      ReservedPropsType | VariantPropType | ArgPropType
    > &
    // Specify props for the root element
    Omit<
      Partial<React.ComponentProps<NodeDefaultElementType[T]>>,
      ReservedPropsType | VariantPropType | ArgPropType | DescendantsType<T>
    >;

function makeNodeComponent<NodeName extends NodeNameType>(nodeName: NodeName) {
  type PropsType = NodeComponentProps<NodeName> & { key?: React.Key };
  const func = function <T extends PropsType>(
    props: T & StrictProps<T, PropsType>
  ) {
    const { variants, args, overrides } = deriveRenderOpts(props, {
      name: nodeName,
      descendantNames: [...PlasmicDescendants[nodeName]],
      internalArgPropNames: PlasmicHome__ArgProps,
      internalVariantPropNames: PlasmicHome__VariantProps
    });

    const { dataFetches } = props;

    return PlasmicHome__RenderFunc({
      variants,
      args,
      overrides,
      dataFetches,
      forNode: nodeName
    });
  };
  if (nodeName === "root") {
    func.displayName = "PlasmicHome";
  } else {
    func.displayName = `PlasmicHome.${nodeName}`;
  }
  return func;
}

export const PlasmicHome = Object.assign(
  // Top-level PlasmicHome renders the root element
  makeNodeComponent("root"),
  {
    // Helper components rendering sub-elements
    header: makeNodeComponent("header"),
    topSection: makeNodeComponent("topSection"),
    testimonial: makeNodeComponent("testimonial"),
    homeCta: makeNodeComponent("homeCta"),
    footer: makeNodeComponent("footer"),

    // Metadata about props expected for PlasmicHome
    internalVariantProps: PlasmicHome__VariantProps,
    internalArgProps: PlasmicHome__ArgProps
  }
);

export default PlasmicHome;
/* prettier-ignore-end */
