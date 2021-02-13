export const commonFields = `
  _id
  name
  url
  description
  logo
  icon
  domain
  dnsStatus
  knowledgeBaseLabel
  knowledgeBaseTopicId
  ticketLabel
  taskPublicPipelineId
  taskLabel
  taskStageId
  taskPipelineId
  taskBoardId
  ticketStageId
  ticketPipelineId
  ticketBoardId
  styles {
    bodyColor
    headerColor
    footerColor
    helpColor
    backgroundColor
    activeTabColor
    baseColor
    headingColor
    linkColor
    linkHoverColor
    baseFont
    headingFont
    dividerColor
    primaryBtnColor
    secondaryBtnColor
  }
  advanced {
    authAllow
    viewTicket
    permission
  }
  css
  mobileResponsive
`;

const getTotalCount = `
  query getClientPortalTotalCount {
    getClientPortalTotalCount
  }
`;

const getConfigs = `
  query getConfigs($page: Int, $perPage: Int) {
    getConfigs(page: $page, perPage: $perPage) {
      ${commonFields}
    }
  }
`;

const getConfig = `
  query getConfig($_id: String!) {
    getConfig(_id: $_id) {
      ${commonFields}
    }
  }
`;

export default { getConfig, getConfigs, getTotalCount };