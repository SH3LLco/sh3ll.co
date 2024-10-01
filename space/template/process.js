DIRECTORIES:
    focus:
        codingAndDevelopment:
            - "{FOCUS}/{CATEGORY}/{TOPIC}"
            - "{FOCUS}/{CATEGORY}/{INTENT}/{TOPIC}"
            - "{FOCUS}/{CATEGORY}/{RESOURCE}/{TOPIC}"
            - "{FOCUS}/{CATEGORY}/{PROPERTY}/{TOPIC}"
            - "{FOCUS}/{CATEGORY}/{HARDWARE}/{MANUFACTURER}/{MODEL}/{TOPIC}"
            - "{FOCUS}/{INTENT}/{CATEGORY}/{TOPIC}"
            - "{FOCUS}/{RESOURCE}/{CATEGORY}/{TOPIC}"
            - "{FOCUS}/{PROPERTY}/{CATEGORY}/{TOPIC}"
        cybersecurity:
            - "{FOCUS}/{CATEGORY}/{TOPIC}"
            - "{FOCUS}/{CATEGORY}/{INTENT}/{TOPIC}"
            - "{FOCUS}/{CATEGORY}/{RESOURCE}/{TOPIC}"
            - "{FOCUS}/{CATEGORY}/{PROPERTY}/{TOPIC}"
            - "{FOCUS}/{CATEGORY}/{HARDWARE}/{MANUFACTURER}/{MODEL}/{TOPIC}"
            - "{FOCUS}/{INTENT}/{CATEGORY}/{TOPIC}"
            - "{FOCUS}/{RESOURCE}/{CATEGORY}/{TOPIC}"
            - "{FOCUS}/{PROPERTY}/{CATEGORY}/{TOPIC}"
        infrastructureAndAdministration:
            - "{FOCUS}/{CATEGORY}/{TOPIC}"
            - "{FOCUS}/{CATEGORY}/{INTENT}/{TOPIC}"
            - "{FOCUS}/{CATEGORY}/{RESOURCE}/{TOPIC}"
            - "{FOCUS}/{CATEGORY}/{PROPERTY}/{TOPIC}"
            - "{FOCUS}/{CATEGORY}/{HARDWARE}/{MANUFACTURER}/{MODEL}/{TOPIC}"
            - "{FOCUS}/{INTENT}/{CATEGORY}/{TOPIC}"
            - "{FOCUS}/{RESOURCE}/{CATEGORY}/{TOPIC}"
            - "{FOCUS}/{PROPERTY}/{CATEGORY}/{TOPIC}"
        networkingAndServices:
            - "{FOCUS}/{CATEGORY}/{TOPIC}"
            - "{FOCUS}/{CATEGORY}/{INTENT}/{TOPIC}"
            - "{FOCUS}/{CATEGORY}/{RESOURCE}/{TOPIC}"
            - "{FOCUS}/{CATEGORY}/{PROPERTY}/{TOPIC}"
            - "{FOCUS}/{CATEGORY}/{HARDWARE}/{MANUFACTURER}/{MODEL}/{TOPIC}"
            - "{FOCUS}/{INTENT}/{CATEGORY}/{TOPIC}"
            - "{FOCUS}/{RESOURCE}/{CATEGORY}/{TOPIC}"
            - "{FOCUS}/{PROPERTY}/{CATEGORY}/{TOPIC}"
        research:
            - "{FOCUS}/{CATEGORY}/{TOPIC}"
            - "{FOCUS}/{CATEGORY}/{INTENT}/{TOPIC}"
            - "{FOCUS}/{CATEGORY}/{RESOURCE}/{TOPIC}"
            - "{FOCUS}/{CATEGORY}/{PROPERTY}/{TOPIC}"
            - "{FOCUS}/{CATEGORY}/{HARDWARE}/{MANUFACTURER}/{MODEL}/{TOPIC}"
            - "{FOCUS}/{INTENT}/{CATEGORY}/{TOPIC}"
            - "{FOCUS}/{RESOURCE}/{CATEGORY}/{TOPIC}"
            - "{FOCUS}/{PROPERTY}/{CATEGORY}/{TOPIC}"
    intent:
        attack:
            - "{INTENT}/{CATEGORY}/{TOPIC}"
            - "{INTENT}/{CATEGORY}/{RESOURCE}/{TOPIC}"
            - "{INTENT}/{CATEGORY}/{PROPERTY}/{TOPIC}"
            - "{INTENT}/{CATEGORY}/{HARDWARE}/{MANUFACTURER}/{MODEL}/{TOPIC}"
            - "{INTENT}/{RESOURCE}/{CATEGORY}/{TOPIC}"
            - "{INTENT}/{FOCUS}/{CATEGORY}/{TOPIC}"
            - "{INTENT}/{PROPERTY}/{CATEGORY}/{TOPIC}"
        defend:
            - "{INTENT}/{CATEGORY}/{TOPIC}"
            - "{INTENT}/{CATEGORY}/{RESOURCE}/{TOPIC}"
            - "{INTENT}/{CATEGORY}/{PROPERTY}/{TOPIC}"
            - "{INTENT}/{CATEGORY}/{HARDWARE}/{MANUFACTURER}/{MODEL}/{TOPIC}"
            - "{INTENT}/{RESOURCE}/{CATEGORY}/{TOPIC}"
            - "{INTENT}/{FOCUS}/{CATEGORY}/{TOPIC}"
            - "{INTENT}/{PROPERTY}/{CATEGORY}/{TOPIC}"
        build:
            - "{INTENT}/{CATEGORY}/{TOPIC}"
            - "{INTENT}/{CATEGORY}/{RESOURCE}/{TOPIC}"
            - "{INTENT}/{CATEGORY}/{PROPERTY}/{TOPIC}"
            - "{INTENT}/{CATEGORY}/{HARDWARE}/{MANUFACTURER}/{MODEL}/{TOPIC}"
            - "{INTENT}/{RESOURCE}/{CATEGORY}/{TOPIC}"
            - "{INTENT}/{FOCUS}/{CATEGORY}/{TOPIC}"
            - "{INTENT}/{PROPERTY}/{CATEGORY}/{TOPIC}"
        learn:
            - "{INTENT}/{CATEGORY}/{TOPIC}"
            - "{INTENT}/{CATEGORY}/{RESOURCE}/{TOPIC}"
            - "{INTENT}/{CATEGORY}/{PROPERTY}/{TOPIC}"
            - "{INTENT}/{CATEGORY}/{HARDWARE}/{MANUFACTURER}/{MODEL}/{TOPIC}"
            - "{INTENT}/{RESOURCE}/{CATEGORY}/{TOPIC}"
            - "{INTENT}/{FOCUS}/{CATEGORY}/{TOPIC}"
            - "{INTENT}/{PROPERTY}/{CATEGORY}/{TOPIC}"
    resource:
        cheatsheet:
            - "{RESOURCE}/{CATEGORY}/{TOPIC}"
            - "{RESOURCE}/{FOCUS}/{CATEGORY}/{TOPIC}"
            - "{RESOURCE}/{INTENT}/{CATEGORY}/{TOPIC}"
            - "{RESOURCE}/{PROPERTY}/{CATEGORY}/{TOPIC}"
        documentation:
            - "{RESOURCE}/{CATEGORY}/{TOPIC}"
        poc:
            - "{RESOURCE}/{CATEGORY}/{TOPIC}"
        course:
            - "{RESOURCE}/{CATEGORY}/{TOPIC}"
        codebase:
            - "{RESOURCE}/{CATEGORY}/{TOPIC}"
        framework:
            - "{RESOURCE}/{CATEGORY}/{TOPIC}"
    property:
        architecture:
            - "{PROPERTY}/{ARCHITECTURE}"
        extension:
            - "{PROPERTY}/{EXTENSION}"
        language:
            - "{PROPERTY}/{LANGUAGE}"
        operatingSystem:
            - "{PROPERTY}/{OPERATINGSYSTEM}"
        platform:
            - "{PROPERTY}/{PLATFORM}"
        port:
            - "{PROPERTY}/{PORT}"
        service:
            - "{PROPERTY}/{SERVICE}"
        technique:
            - "{PROPERTY}/{TECHNIQUE}"
        tool:
            - 
        application:
            - 
    hardware_info:
        hardware:
            - "{HARDWARE}/{MANUFACTURER}/{MODEL}"

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
