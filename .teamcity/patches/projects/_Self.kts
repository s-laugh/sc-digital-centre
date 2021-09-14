package patches.projects

import jetbrains.buildServer.configs.kotlin.v2019_2.*
import jetbrains.buildServer.configs.kotlin.v2019_2.Project
import jetbrains.buildServer.configs.kotlin.v2019_2.ui.*

/*
This patch script was generated by TeamCity on settings change in UI.
To apply the patch, change the root project
accordingly, and delete the patch script.
*/
changeProject(DslContext.projectId) {
    params {
        add {
            param("env.SUBSCRIPTION_ID", """${'$'}(az account show --subscription "MTS" --query 'id' -o tsv)""")
        }
        add {
            param("env.TENANT_ID", """${'$'}(az account show --subscription "MTS" --query 'homeTenantId' -o tsv)""")
        }
        add {
            param("env.KEYVAULT_NAME", "dtssecrets")
        }
        add {
            param("env.K8S_CLUSTER_NAME", "EsDCDTSDevRG-K8S")
        }
        add {
            param("env.KEYVAULT_READ_USER", "${'$'}(az keyvault secret show --vault-name dtssecrets --name dts-dev-keyvault-read-user --query value -otsv)")
        }
        add {
            param("env.APP_NAME", "sc-digital-centre")
        }
        add {
            param("env.K8S_RG_NAME", "EsDCDTSDevRG")
        }
        add {
            param("env.KEYVAULT_READ_PASSWORD", "${'$'}(az keyvault secret show --vault-name dtssecrets --name dts-dev-keyvault-read-password --query value -otsv)")
        }
    }
}
