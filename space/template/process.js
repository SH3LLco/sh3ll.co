DIRECTORIES:
    focus:
        codingAndDevelopment = "{FOCUS}/{CATEGORY}/{TOPIC}"
        cybersecurity = "{FOCUS}/{CATEGORY}/{TOPIC}"
        infrastructureAndAdministration = "{FOCUS}/{CATEGORY}/{TOPIC}"
        networkingAndServices = "{FOCUS}/{CATEGORY}/{TOPIC}"
        research = "{FOCUS}/{CATEGORY}/{TOPIC}"
        technique = "{FOCUS}/{TECHNIQUE}/{CATEGORY}/{TOPIC}"
    intent:
        attack = "{INTENT}/{CATEGORY}/{TOPIC}"
        defend = "{INTENT}/{CATEGORY}/{TOPIC}"
        build = "{INTENT}/{CATEGORY}/{TOPIC}"
        learn = "{INTENT}/{CATEGORY}/{TOPIC}"
    resource:
        cheatsheet = "{RESOURCE}/{CATEGORY}/{TOPIC}"
        documentation = "{RESOURCE}/{CATEGORY}/{TOPIC}"
        tool = "{RESOURCE}/{CATEGORY}/{TOPIC}"
        poc = "{RESOURCE}/{CATEGORY}/{TOPIC}"
        course = "{RESOURCE}/{CATEGORY}/{TOPIC}"
        codebase = "{RESOURCE}/{CATEGORY}/{TOPIC}"
        framework = "{RESOURCE}/{CATEGORY}/{TOPIC}"
    property:
        ARC = "{PROPERTY}/{ARCHITECTURE}"
        EXT = "{PROPERTY}/{EXTENSION}"
        LNG = "{PROPERTY}/{LANGUAGE}"
        OPS = "{PROPERTY}/{OPERATINGSYSTEM}"
        PTM = "{PROPERTY}/{PLATFORM}"
        PRT = "{PROPERTY}/{PORT}"
        SRV = "{PROPERTY}/{SERVICE}"
    hardware_info:
        HDW = "{HARDWARE}/{MANUFACTURER}/{MODEL}"

Focus Category Template
"
---
tags: category
pageDecoration:
  cssDecoration:
    - no-frontmatter
Category: {CATEGORY}
Focus: {FOCUS}
---
"

Focus Topic Template
